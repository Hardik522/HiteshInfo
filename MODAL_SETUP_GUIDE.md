# Modal Setup & Management Guide

## 📋 Project Structure Overview

```
src/
├── components/
│   ├── introduction/
│   │   ├── Introduction.jsx          ← Modal trigger & portal rendering
│   │   ├── introduction.css
│   │   └── InformationSummary.jsx
│   ├── contact/
│   │   ├── Budget.jsx                ← Modal form content
│   │   └── Form.jsx
│   └── common/
├── layouts/
│   └── Main.jsx                      ← Root layout wrapper
├── pages/
│   └── Home.jsx
├── App.jsx                           ← App root
├── index.css                         ← Global styles
└── main.jsx                          ← Entry point
```

## 🎯 How the Modal Works

### **1. Modal Portal System (React 18+)**

The modal uses React's `createPortal` API to render the modal at the document body level, ensuring:
- ✅ Modal is NOT affected by parent container's CSS properties
- ✅ Modal always stays centered regardless of page layout
- ✅ No z-index conflicts with other elements
- ✅ Modal renders outside the normal DOM hierarchy

### **2. Key Files**

#### **[Introduction.jsx](src/components/introduction/Introduction.jsx)**
```jsx
import { createPortal } from "react-dom";

// Modal rendered at body level (not inside component tree)
{showBudget && createPortal(
  <div className="fixed inset-0 z-50 flex items-center justify-center ...">
    {/* Modal content */}
  </div>,
  document.body  // ← Renders at document.body, not in Introduction div
)}
```

**Key Features:**
- Uses `createPortal()` to escape component hierarchy
- Modal state managed with `useState(false)`
- Prevents body scroll when modal is open via `document.body.style.overflow`

#### **[Budget.jsx](src/components/contact/Budget.jsx)**
```jsx
// Form component - contains all input fields
// Receives onClose callback from parent
const Budget = ({ onClose }) => {
  // Form inputs and submit logic
}
```

## 🛠️ How to Manage the Modal

### **1. Show/Hide Modal**

```jsx
// In Introduction.jsx
const [showBudget, setShowBudget] = useState(false);

// Show modal
<button onClick={() => setShowBudget(true)}>Chat with me!</button>

// Hide modal
<button onClick={() => setShowBudget(false)}>Close</button>
```

### **2. Prevent Body Scroll When Modal is Open**

```jsx
useEffect(() => {
  document.body.style.overflow = showBudget ? "hidden" : "auto";
}, [showBudget]);
```

This prevents the background from scrolling while the modal is open.

### **3. Modal Structure**

```
Fixed Container (inset-0)
├── Overlay (bg-black/50)
├── Modal Dialog
│   ├── Header (sticky top-0)
│   │   ├── Title
│   │   └── Close Button
│   └── Body Content
│       └── Budget Form
```

## 📐 CSS Classes Breakdown

### **Centering Classes**
```css
fixed inset-0              /* Position: fixed at all 4 edges (0, 0, 0, 0) */
flex                       /* Display: flex */
items-center               /* Align items vertically center */
justify-center             /* Align items horizontally center */
```

### **Responsive Classes**
```css
max-w-sm              /* Mobile: max-width 24rem (384px) */
xs:max-w-md          /* XS screens: max-width 28rem (448px) */
sm:max-w-lg          /* SM screens: max-width 32rem (512px) */
md:max-w-2xl         /* MD screens: max-width 42rem (672px) */

p-2 xs:p-4           /* Padding adjusts based on screen size */
```

### **Sticky Header**
```css
sticky top-0         /* Header stays at top while scrolling content */
rounded-t-2xl        /* Rounded corners only at top */
border-b             /* Bottom border separator */
```

## 🎨 Customization Options

### **1. Change Modal Width**
```jsx
// In Introduction.jsx, line 83
<div className="... max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl ...">
     ↑ Change these values ↑
```

Options:
- `max-w-xs` (320px)
- `max-w-sm` (384px) ← Current
- `max-w-md` (448px)
- `max-w-lg` (512px)
- `max-w-xl` (576px)
- `max-w-2xl` (672px)

### **2. Change Background Overlay Color**
```jsx
// Current: semi-transparent black
<div className="... bg-black/50 ...">
                      ↑ Change opacity ↑

// Options:
bg-black/25  (25% opacity)
bg-black/50  (50% opacity) ← Current
bg-black/75  (75% opacity)
```

### **3. Add Backdrop Blur**
```jsx
// Already added for modern look
<div className="... backdrop-blur-sm ...">
```

### **4. Change Modal Colors**
```jsx
// Header title color
<h2 className="... text-picto-primary ...">  ← Primary color

// Close button hover
<button className="... hover:text-gray-600 ...">  ← Hover color
```

### **5. Customize Form Fields**
Edit [Budget.jsx](src/components/contact/Budget.jsx):
- Add/remove form fields
- Change placeholder text
- Modify validation rules
- Update field labels

## 🔍 Debugging Tips

### **Check if Modal is Rendering**
```jsx
// Add console.log in Introduction.jsx
{showBudget && (
  console.log('Modal showing'),
  createPortal(...)
)}
```

### **Check Z-index Issues**
```css
/* Make sure modal has highest z-index */
z-50   /* 5000 in Tailwind */
```

### **Check Overflow Handling**
```jsx
// Verify body overflow is being set
useEffect(() => {
  console.log('Body overflow:', showBudget ? 'hidden' : 'auto');
  document.body.style.overflow = showBudget ? "hidden" : "auto";
}, [showBudget]);
```

## ⚙️ Advanced: Create a Reusable Modal Component

You can extract the modal logic into a reusable component:

```jsx
// components/common/Modal.jsx
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[95vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose}>×</button>
        </div>
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
```

Then use it in Introduction.jsx:
```jsx
<Modal 
  isOpen={showBudget} 
  onClose={() => setShowBudget(false)}
  title="Set Your Budget"
>
  <Budget onClose={() => setShowBudget(false)} />
</Modal>
```

## ✅ Verification Checklist

- [x] Modal uses `createPortal()` to render at body level
- [x] Modal has `fixed inset-0` for full screen coverage
- [x] Modal uses `flex items-center justify-center` for centering
- [x] Modal has appropriate `z-50` for layering
- [x] Body scroll is prevented when modal is open
- [x] Close button and Escape key both close modal
- [x] Modal is responsive on all screen sizes
- [x] Modal has smooth animations
- [x] Form fields are properly styled
- [x] Sticky header works during scroll

## 📱 Responsive Behavior

| Screen Size | Modal Width | Padding |
|-------------|------------|---------|
| Mobile (< 320px) | 384px | 8px |
| XS (320px+) | 448px | 16px |
| SM (640px+) | 512px | 24px |
| MD (768px+) | 672px | 32px |

---

**Last Updated:** January 28, 2026
**Status:** ✅ Fully Responsive & Centered
