import React from 'react';
import SubCategory from "./SubCategory";


function CategoryColumn({name, subCategories, cards}) {


    return (
        <div className="col text-center border h-auto">
            {name}
            {subCategories.map((subCategory) =>
                <SubCategory name={subCategory.name} key={subCategory.name} cards={cards}/>
            )}
        </div>
    );
}

export default CategoryColumn;