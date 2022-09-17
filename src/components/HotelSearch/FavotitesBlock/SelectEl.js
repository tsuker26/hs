import React from 'react';
import styles from "./FavoritesBlock.module.scss";
import {useDispatch, useSelector} from "react-redux";
import ArrowEl from "./ArrowEl";
import {setFilterIdAc} from "../../../redux/reducers/filterReducer";

const SelectEl = ({filter}) => {
    const {filterId} = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const arrowItems = [{id: 0, name: 'up'}, {id: 1, name: 'down'}]

    return (
        <div onClick={() => dispatch(setFilterIdAc(filter.id))}
             className={`${styles.select} ${filter.id === filterId ? styles.active : ''}`}>
            <span>{filter.name}</span>
            <div className={styles.arrow}>
                {arrowItems.map(arrow => <ArrowEl key={arrow.id}
                                                  arrow={arrow}
                                                  filter={filter}/>)}
            </div>
        </div>
    );
};

export default SelectEl;