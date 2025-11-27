export default function Layout(props){
    
    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient">The FIT30</h1>
            <p><strong>Your 30 Days Simple Workout Program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by <a href="" target="_blank">Kaushal Bhattarai</a></p>
        </footer>
    )
    
    return (
        <>
            {header}
            {children}
            {footer}
        </>
    );
}