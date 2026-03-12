import { useId } from "react";

export default function HtmlFor() {
  const textId = useId();
  const nameId = useId();
  const emailId = useId();
  const fieldId = useId();

  return (
    <div>
         <form>
      <label htmlFor={`${fieldId}-username`}>Name</label>
      <input type="text" name="username" id={`${fieldId}-username`} />

      <label htmlFor={`${fieldId}-email`}>Email</label>
      <input type="email" name="email" id={`${fieldId}-email`} />

      <button type="submit">Place order</button>
    </form>
        <form>
        <label htmlFor={textId}>Text field label</label>
        <input type="text" id={textId} />
        </form>
        <form>
        <label htmlFor={nameId}>Name</label>
        <input type="text" name="username" id={nameId} />

        <label htmlFor={emailId}>Email</label>
        <input type="email" name="email" id={emailId} />
        
        <button type="submit">Place order</button>
    </form>
    
  </div>
  );
};