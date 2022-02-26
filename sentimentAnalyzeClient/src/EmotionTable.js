import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
                Object.entries(this.props.emotions).map(function(emotionEntry){
                    return(
                        <tr>
                            <td>{emotionEntry[0]}</td>
                            <td>{emotionEntry[1]}</td>
                        </tr>
                        
                    )
                })
                //Write code to use the .map method that you worked on in the Hands-on React lab to extract the emotions
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;