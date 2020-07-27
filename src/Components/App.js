import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

 // C3YWchbaPqaLdmGAS0b3QBSX9Q9wxD_kqUTKM0t-EdU - Access Key
 // nmmCHEfPzRS8LkZHyw7ZaH4S-ScrngHrE3g1p3K8aGM --- Secret Key

 /* Using Promise .then Syntax to catch the returned promise Object
 .then(response => {
      console.log(response.data.results); 
    })
 */

class App extends React.Component{
  state = {images : []}

   onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query : term },
      
    });
    
      this.setState({images: response.data.results});
  }
 
  render (){
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={ this.onSearchSubmit} />
      <ImageList images={this.state.images} />
    </div>
  );
}
}

export default App;