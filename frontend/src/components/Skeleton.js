import classNames from "classnames"

function Skeleton({boxcount,className,type}) {
    const staticBlockClass = classNames(
        'relative',
        'overflow-hidden',
        'bg-red-200',
        'rounded',
        'mb-2.5',
        className
    );

    const runnerBlockClass = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-red-200',
        'via-white',
        'to-red-200'
    );
    
    const box = Array(boxcount).fill(0).map((_,i) => {
        return <div key={i} className={staticBlockClass} >
            <div className={runnerBlockClass} />
        </div>
    });

    return box

}

export default Skeleton;