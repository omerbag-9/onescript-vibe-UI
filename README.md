# OneScript Healthcare UI

A complete, fully functional UI design system for the OneScript healthcare platform. This is a production-ready static website with working navigation, forms, and user flows.

## 🚀 Quick Start

### Local Development
```bash
npm install
npm start
```
Then open `http://localhost:8080` in your browser.

### Deploy to Free Hosting
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to:
- GitHub Pages
- Netlify
- Vercel
- Surge.sh

## ✨ Features

- ✅ **Complete User Flows** - All navigation paths work correctly
- ✅ **Form Handling** - Forms validate and navigate properly
- ✅ **Modal Popups** - Interactive modals for account selection
- ✅ **Progress Saving** - Assessment progress can be saved
- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **Clean UI** - Healthcare-appropriate, professional design
- ✅ **No Backend Required** - Pure static HTML/CSS/JS

## Color Scheme

- **Primary Teal**: `#00BFA5`
- **Primary Dark**: `#00897B`
- **Text Dark**: `#2C3E50`
- **Text Light**: `#7F8C8D`
- **Background Light**: `#F5F5F5`
- **Background White**: `#FFFFFF`

## File Structure

### Core Files (Root)
- `styles.css` - Main stylesheet with all UI components
- `index.html` - Landing page
- `components/header.html` - Shared header component
- `components/footer.html` - Shared footer component

### Authentication Pages (`auth/`)
- `signin.html` - Sign in page
- `signup.html` - Create account page
- `reset-password.html` - Password reset page

### Patient Pages (`patient/`)
- `patient-profile.html` - Create patient profile
- `prescription-renewal.html` - Prescription renewal request
- `service-selection.html` - Select healthcare service
- `assessment.html` - Health assessment form
- `product-selection.html` - Select product
- `dashboard.html` - Patient dashboard
- `identity-verification.html` - Stripe identity verification
- `payment.html` - Payment pre-authorization
- `assessment-status.html` - View assessment status
- `prescription-details.html` - View prescription details

### Doctor Pages (`doctor/`)
- `doctor-dashboard.html` - Doctor dashboard with pending assessments
- `doctor-review.html` - Review and approve/reject assessments

### Pharmacist Pages (`pharmacist/`)
- `pharmacist-dashboard.html` - Pharmacist dashboard with orders
- `pharmacist-fulfill.html` - Fulfill order and create shipping

### Admin Pages (`admin/`)
- `admin-dashboard.html` - Superadmin dashboard
- `admin-questions.html` - Manage assessment questions
- `admin-doctors.html` - Manage doctors (add by email invitation)

## Design Principles

1. **Simple & Clean**: Minimal design focused on usability
2. **Healthcare Appropriate**: Professional and trustworthy appearance
3. **Consistent**: Same color scheme and components throughout
4. **Accessible**: Clear labels, good contrast, readable fonts

## Usage

These are static HTML files with CSS. You can:
1. Open them directly in a browser (header/footer will load via JavaScript fetch)
2. Use them as design references for your actual implementation
3. Extract the CSS and component styles for your framework

## Notes

- All pages use the same header and footer components
- Forms are simple and straightforward
- Status badges use color coding (pending, approved, rejected)
- Cards and tables are used for data display
- The design follows the workflow from the provided flowchart

