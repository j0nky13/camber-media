export default function Button({ as:Tag='button', className='', children, ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center rounded-md px-4 py-2
                  bg-accent text-brand font-medium shadow-soft hover:bg-accent-700
                  transition-colors ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}