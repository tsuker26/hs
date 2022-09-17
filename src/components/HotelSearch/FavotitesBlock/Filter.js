import React from 'react';
import styles from "./FavoritesBlock.module.scss";
import SelectEl from "./SelectEl";

const Filter = () => {
    const filterItems = [{id: 0, name: 'Рейтинг'}, {id: 1, name: 'Цена'}]
    return (
        <div className={styles.filter}>
            {
                filterItems.map(filter => <SelectEl key={filter.id}
                                                    filter={filter}/>)
            }
        </div>
    );
};

export default Filter;