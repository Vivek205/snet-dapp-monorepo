export const basicDetailsFormData = {
  ORG_ID: {
    id: "Organization id",
    name: "id",
    label: "Org id",
    description: "The org id is unique identification for the company.",
  },
  ORGANIZATION_NAME: {
    id: "organization Name - 15/50 char",
    name: "name",
    label: "Organization Name",
    helperText: "15/50 char",
    description: `The organization name is displayed to AI Marketplace users for all publish AI services.`,
  },
  DUNS: {
    id: "DUNS Number",
    name: "duns",
    label: "DUNS Number",
    helperText: "",
    description: `You can learn more about how to get a DUNS number. This can take up to 5 days to verify.`,
  },
  WEBSITE: {
    id: "Organization Website URL",
    name: "website",
    label: "Organization Website URL",
    helperText: "",
    description: `Your organization’s website must be publicly available and the domain name must be associated with your organization.`,
  },
  OWNERS_FULL_NAME: {
    id: "Your Full Name - 15/50 char",
    name: "ownerFullName",
    label: "Owner's Full Name",
    helperText: "15/50 char",
    description: `You should be owner of your company’s legal entity.`,
  },
  PHONE: {
    id: "Phone Number - 15/50 char",
    name: "phone",
    label: "Phone Number",
    description: `Include plus sign, country code and area code.  For example +1-800-555-1234.`,
  },
};
