export const basicDetailsFormData = {
  COMPANY_NAME: {
    id: "company Name - 15/50 char",
    name: "companyName",
    label: "Company Name",
    helperText: "15/50 char",
    description: `The company name is displayed to users under you AI service name.`,
  },
  DUNS: {
    id: "DUNS Number",
    name: "duns",
    label: "DUNS Number",
    helperText: "",
    description: `You can use the DUNS number lookup tool here.  This can take up to 5 days to verify.`,
  },
  WEBSITE: {
    id: "Organization Website URL",
    name: "website",
    label: "Organization Website URL",
    helperText: "",
    description: `Your organization’s website must be publicly available and the domain name must be associated with your organization.`,
  },
  USER_FULL_NAME: {
    id: "Your Full Name - 15/50 char",
    name: "ownerFullName",
    label: "Your Full Name",
    helperText: "15/50 char",
    description: `You should be owner of your company’s legal entity.`,
  },
  PHONE: {
    id: "Phone Number - 15/50 char",
    name: "phone",
    label: "Phone Number",
    helperText: "15/50 char",
    description: `Include plus sign, country code and area code.  For example +1-800-555-1234.   Why do we ask for you phone number`,
  },
};
