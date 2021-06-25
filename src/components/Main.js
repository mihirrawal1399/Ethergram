import React, { Component } from 'react';
import Identicon from 'identicon.js';
import './Main.css';

class Main extends Component {

  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '550px' }}>
            <div className="content mr-auto ml-auto">
              <p>&nbsp;</p>

              

              <form onSubmit={(event) => {
                event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)
                }} >
                
                <div className="form-group mr-sm-2">
                  <h2 className= "title1 p-1 mb-2 text-center shadow-lg" >Share Image</h2>
                  <input type='file' class= "p-2 mb-2 btn btn-dark text-white text-center rounded shadow-lg" accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} />
                  <br></br>
                  <input
                    id="imageDescription"
                    type="text"
                    ref={(input) => { this.imageDescription = input }}
                    className="form-control"
                    placeholder="Image description..."
                    required />
                  <br></br>
                  <button type="submit" class="btn btn-block btn-lg">Upload!</button>
                </div>
                <br></br>
              </form>

             { this.props.images.map((image, key) => {
                return(
                  <div className="card mb-4" key={key} >
                    <div className="card-header">
                      <img
                        className='mr-2'
                        width='30'
                        height='30'
                        alt='Account'
                        src={`data:image/png;base64,${new Identicon(image.author, 30).toString()}`}
                      />
                      <small className="text-muted">{image.author}</small>
                    </div>
                    <ul id="imageList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p class="text-center"><img src={`https://ipfs.infura.io/ipfs/${image.hash}`} alt='Loading...' style={{ maxWidth: '420px'}}/></p>
                        <p>{image.description}</p>
                      </li>
                      <li key={key} className="list-group-item py-2">
                        <small className="float-left mt-1 text-muted">
                          TIPS: {window.web3.utils.fromWei(image.tipAmount.toString(), 'Ether')} ETH
                        </small>
                        <button
                          className="btt float-right pt-0"
                          name={image.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                            console.log(event.target.name, tipAmount)
                            this.props.tipImageOwner(event.target.name, tipAmount)
                          }}
                        >
                          TIP 0.1 ETH
                        </button>
                      </li>
                    </ul>
                  </div>
                )
              })}
              
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;