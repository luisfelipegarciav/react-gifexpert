import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['One punch']);

    const handleOnAddCategory = (category) => {

        if (categories.includes(category)) return;

        // setCategories([...categories, category]); // at the bottom
        setCategories([category, ...categories,]); // at the beginning
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory onAddCategory={handleOnAddCategory} />

            {/* listado */}
            {
                categories.map(e => (
                    <GifGrid key={e} category={e} />
                ))
            }

            {/* gif item */}
        </>
    )
}
