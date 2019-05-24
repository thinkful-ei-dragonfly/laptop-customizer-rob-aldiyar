import React from 'react';
import Feature from './Feature/Feature';


export default class Features extends React.Component {


  






  render() {
    return (
      <div>
        <h1>this still renders</h1>
        <Feature/>
        <Feature/>
        <Feature/>
        <Feature/>
      </div>




    );



    // return {
    //   const features = Object.keys(this.props.features)
    //    .map(key => {
    // const options = this.props.features[key].map((item, index) => {
    //   const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
    //   const featureClass = 'feature__option ' + selectedClass;
    //   return <li key={index} className="feature__item">
    //     <div className={featureClass}
          
    //       onClick={e => this.updateFeature(key, item)}>
    //         { item.name }
    //         ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
    //           .format(item.cost) })
    //     </div>
    //   </li>
    // });  


    // });)    


  }

}








