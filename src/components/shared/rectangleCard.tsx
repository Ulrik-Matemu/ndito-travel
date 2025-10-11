export const RectangleCard = ( { children, className }: { children: React.ReactNode, className?: string } ) => {
    return (
        <div className={`border border-transparent my-10 mb-24 p-6 ${className ?? ''}`}>
            {children}
        </div>
    )
}