import styles from './dropdown.module.scss';
import { useContext } from 'react';
import { LanguageContext } from '../../App';

const Dropdown = () =>{
    //buatlah variable untuk mengimport context text dan setLanguage
    // TODO: answer here
    const text = useContext(LanguageContext).text;
    const setLanguage = useContext(LanguageContext).setLanguage;

    const handleSelectValueChange = (value) =>{
        //gunakanlah method ini untuk mengubah context language
        // TODO: answer here
        if(value === "english"){
            setLanguage("english")
        } else if(value === "indonesian"){
            setLanguage("indonesian")
        } else if(value === "spanish"){
            setLanguage("spanish")
        }
    }

    return(
        <div className={styles['dropdown']}>
            <label htmlFor='language'>{text.changeLanguage} : </label>
            <select data-testid='dropdown' name="language" onChange={(e)=>{handleSelectValueChange(e.target.value)}}>
                <option value="english">{text.englishLanguage}</option>
                <option value="indonesian">{text.indonesianLanguage}</option>
                <option value="spanish">{text.spanishLanguage}</option>
            </select>
        </div>
    )
}

export default Dropdown;