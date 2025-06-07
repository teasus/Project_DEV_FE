import React from 'react'


const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
        {children}
        <div>
            Layout
        </div>
    </div>
  )
}

export default layout