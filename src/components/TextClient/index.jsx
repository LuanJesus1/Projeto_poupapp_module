import style from './textclient.module.css'

export function TextClient() {
    return(
       <div className={style.container}>
            <h1 className={style.h1}>Olá, Aurélio!</h1>
            <p className={style.p}>Que tal olhar suas finanças hoje?</p>
        </div>
    )
}