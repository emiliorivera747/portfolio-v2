/**
 *
 * This file defines a layout component for the Casa Chirilagua page
 *
 * @param children - The children to render within the layout.
 * @returns layout component that wraps the children in a main element.
 */
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
