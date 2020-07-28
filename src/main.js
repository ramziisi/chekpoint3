import React from 'react';
import FullNAme from './profil/FullName';
import ProfilPhoto from './profil/ProfilPhtoto';
import Address from './profil/Addresse';
import "./App.css"
/*const main=()=>{
    return(
        <frameElement>
        <FullNAme />
        <ProfilPhoto />
        <Address />
        </frameElement>
    )
}
*/
class Main extends React.Component {
    render() {
        return ( 
            <div  className="bb">
               <FullNAme />
               <ProfilPhoto />
                <Address />
            </div>
            
       );
            }
        }
        export default Main