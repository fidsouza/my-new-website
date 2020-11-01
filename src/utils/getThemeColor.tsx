const getThemeColor = () => {
    const theme = typeof window !== 'undefined' && window.__theme

    if(theme === 'dark'){
        return  '#3c1e57'
    }
    if(theme ==='light'){
        return '#fff'

    }

}

export default getThemeColor