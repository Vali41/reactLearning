import './button.css';

function Button(props) { 
	const {onColorSelect}=props

	const colorArray=[{ id: 'red', color: 'Red' },
    { id: 'blue', color: 'Blue' },
    { id: 'black', color: 'Black' },
    { id: 'pink', color: 'Pink' },
    { id: 'brown', color: 'Brown' },
    { id: 'green', color: 'Green' }]

	const handlingButtonClick=(colorId)=>{
		onColorSelect(colorId)
	}
	
  return(
	<>
		<div className="flex flex-wrap justify-center gap-4 p-4 rounded-lg shadow-lg bg-gray-100">
			{colorArray.map((eachColor)=>(<button key={eachColor.id} type='button' onClick={()=>handlingButtonClick(eachColor.id)} className={`px-6 py-3 rounded-full text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${eachColor.id}-500 bg-${eachColor.id}-500  shadow  hover:bg-${eachColor.id}-600  hover:transform hover:scale-105  hover:shadow-lg active:bg-${eachColor.id}-700 active:transform active:scale-95  active:shadow-md  focus:ring-offset-gray-100  focus:ring-${eachColor.id}-500  focus:shadow-lg  focus:transform focus:scale-105  focus:
            shadow-md hover:shadow-lg`} style={{ backgroundColor: eachColor.id }} >{eachColor.color}</button>))}
		</div>
	</>
  )

}

export default Button;