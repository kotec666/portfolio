import { HTMLAttributes, PropsWithChildren} from "react"
import classNames from "classnames";

const Container = (props: PropsWithChildren<HTMLAttributes<HTMLElement>>) => {
    return (
        <section
            {...props}
            className={classNames("max-w-[1600px] ml-auto mr-auto xl:px-10 sm:px-20 smmaxw:px-10 border-[2px] border-b-red-500", props.className)}
        />
    )
}

export default Container
