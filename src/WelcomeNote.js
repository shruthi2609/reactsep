import UserProfile from "./UserProfile"
function WelcomeNote(){
    return(
        <div>
        <UserProfile></UserProfile>
        <h1>Hello User ! Good morning ! </h1>
        </div>
    )
}
function SomeComponent(){
    return(
        <h1>Something</h1>
    )
}
function AnotherComponent(){
    return(
        <h1>this is from another component</h1>
    )
}
export {WelcomeNote,SomeComponent}
export default AnotherComponent