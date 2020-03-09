import React from 'react';

function AddItemInput() {
	return (
		<div>
			<input type="text" name="addItem" placeholder="Enter Item..." id="add-item" />
			<button type="submit" value="submit" id="submit-btn">SUBMIT</button>
		</div>
	);
}

export default AddItemInput