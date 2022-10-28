import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import CategoryColumn from "./Components/CategoryColumn";
import {DragDropContext} from "react-beautiful-dnd";


function App() {

  //create file after this, then create mongo collection,
  const categories = [
    {
      id: "4",
      name: "design",
      color: "red",
      subCategories: [
        {name: "Initial Design"},
        {name: "Midway Design"},
        {name: "Final Design"}
      ]
    },
    {
      id: "92",
      name: "development",
      color: "blue",
      subCategories: [
        {name: "Initial Development"},
        {name: "Midway Development"},
        {name: "Final Development"}
      ]
    }
  ]

  const cards = [
    {id: uuidv4(), name: "Biscoff Brochure Site", description: "Single page brochure site", currentCategory: "Initial Design"},
    {id: uuidv4(), name: "Tom's Emporium Site", description: "Site fit for a Bussin' King, no cap", currentCategory: "Midway Design"},
    {id: uuidv4(), name: "The Parrot Tico Tango", description: "Site detailing the fruits that Tico Tango stole and lost", currentCategory: "Midway Development"},
    {id: uuidv4(), name: "Diggersaurs Site", description: "Signup site for the Diggersaurs fanclub", currentCategory: "Final Development"}
  ]


  return (
    <div className="App">
      <div className="container">

        <DragDropContext>

          <div className="row">
            {categories.map((category) =>
                <CategoryColumn
                    key={category.id && category.id}
                    name={category.name && category.name}
                    subCategories={category.subCategories && category.subCategories}
                    color={category.color}
                    cards={cards}
                />
            )}
          </div>

        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
