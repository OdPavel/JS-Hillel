import PropTypes from 'prop-types';
import styles from './Contacts.module.css'
const Contacts = props => {
    return (
        <div className={styles.contacts}>
            <h1>Контактная информация</h1>
            <h2>Интернет-магазин Qwertyshop</h2>
            <h2>Наш адрес</h2>
            <h3>Офис: Украина, Одесса, ул.Армейская 5</h3>
            <h3>Магазин: ул.Армейская 5</h3>
            <h2>Контактные телефоны и Telegram</h2>
            <h3>(048) 772 - 82 - 92<br/>
                (048) 706 - 52 - 25<br/>
                (048) 741 - 72 - 72<br/>
                (097) 972 - 82 - 92<br/>
            </h3>
            <h2>Электронная почта</h2>
            <h3>info@qwerty.od.ua</h3>
            <h2>График работы магазина</h2>
            <h3>Пн - Пт : 10 :  00  до  18 :  00<br/>
                Суббота: выходной<br/>
                Воскресенье - выходной</h3>
        </div>

    );
};

Contacts.propTypes = {};

export default Contacts;












