//@ts-ignore
export default function Container ({children}: { children: React.ReactNode; }) {
return(
    <div className={"container mx-auto px"}>
        {children}
    </div>
)
}