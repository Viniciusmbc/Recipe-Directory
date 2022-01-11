import { useTheme } from "../hooks/useTheme";
import { ThemeSelectorStyle, ThemeButtons } from "./Styles/ThemeSelectorStyle";


const themeColors = ['#58249c', '#249c6b', '#b70233'];

export default function ThemeSelector() {

    const {changeColor} = useTheme();

    return (
        <>
        <ThemeSelectorStyle>
            
            {themeColors.map(color => (
                <ThemeButtons key={color} onClick={() => changeColor(color)} style={{background: color}}/> 
            ))}
          
        </ThemeSelectorStyle>
        </>
    )
}