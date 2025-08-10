/**
 * ContentWrapper is a reusable layout utility component that constrains
 * the width of its children to a maximum of 1350px and centers it horizontally.
 *
 * It is commonly used to wrap page content to ensure a consistent layout
 * across different screens while maintaining responsive margins (`mx-auto`).
 *
 * Note:
 * - Do not use this inside the main navigation bar, as it can break sticky positioning.
 * - Avoid wrapping the root layout with this component directly. Instead,
 *   use it **inside** the layout or individual pages to avoid shrinking full-width
 *   background sections (like headers or colored areas).
 *
 * @param {React.ReactNode} children - The children of the component.
 * @returns {React.ReactNode} The content wrapped in a div with a max-width.
 */

const ContentWrapper = ({ children }) => {
  return <div className="max-w-[1400px] mx-auto px-5 lg:px-7">{children}</div>;
};

export default ContentWrapper;
