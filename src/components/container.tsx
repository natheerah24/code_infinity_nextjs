export default function Container (props) {
    const {children} = props;
return(
    <div className={"container mx-auto"}>
        {children}
    </div>
)
}