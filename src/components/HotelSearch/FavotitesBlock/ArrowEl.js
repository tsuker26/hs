import React from 'react';
import styles from "./FavoritesBlock.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setArrowIdAc} from "../../../redux/reducers/filterReducer";

const ArrowEl = ({arrow, filter}) => {
    const {filterId, arrowId} = useSelector(state => state.filter)
    const dispatch = useDispatch()
    return (
        <>
            {arrow.name === 'up'
                ? <svg  onClick={() => dispatch(setArrowIdAc(arrow.id))}
                       className={filter.id === filterId && arrow.id === arrowId ? styles.arrow_active : ''} width="9"
                       height="6"
                       viewBox="0 0 9 6" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 4.24264L7.43934
                            5.3033L4.25736 2.12132L1.07538
                            5.3033L0.0147181 4.24264L4.25736
                            0L8.5 4.24264Z" fill="#41522E"/>
                </svg>
                : <svg onClick={() => dispatch(setArrowIdAc(arrow.id))}
                       className={filter.id === filterId && arrow.id === arrowId ? styles.arrow_active : ''} width="9"
                       height="7"
                       viewBox="0 0 9 7" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 1.83245L7.43934
                            0.77179L4.25736 3.95377L1.07538
                            0.77179L0.0147181 1.83245L4.25736
                            6.07509L8.5 1.83245Z" fill="#41522E"/>
                </svg>}
        </>
    );
};

export default ArrowEl;


