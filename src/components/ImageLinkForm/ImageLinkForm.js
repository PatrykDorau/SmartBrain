import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
	return (
			<div >
				<p className = ' white f3'>
					{'This magic brain will detect faces in your pictures, remember to use .jpg format'}
				</p>
				<div className = 'center'>
					<div  className = 'form center pa4 br3 shadow-5'>
						<input onChange = {onInputChange} className = 'w-70 f4 pa2 center' type = 'text' />
						<button onClick = {onButtonSubmit} className ='w-30 grow f4 link ph3 pv2 dib white bg-light-blue' >Detect</button>
					</div>
				</div>
				
			</div>
		);
}
export default ImageLinkForm;