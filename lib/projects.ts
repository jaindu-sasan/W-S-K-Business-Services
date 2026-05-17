export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  summary: string;
  overview: string;
  servicesInvolved: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'project-1',
    title: 'Business Accounting System Review',
    description:
      'Reviewed accounting workflows and supported process improvements for better financial reporting accuracy.',
    summary:
      'This project focused on reviewing accounting workflows and identifying improvements to support more accurate and efficient financial reporting.',
    overview:
      'WSK supported the client by reviewing existing accounting procedures, identifying process gaps, and recommending practical improvements to strengthen financial reporting.',
    servicesInvolved: [
      'Accounting process review',
      'Financial reporting support',
      'Workflow improvement',
      'Advisory recommendations',
    ],
    outcome:
      'The project helped improve reporting clarity, reduce manual process issues, and support better management decision-making.',
  },
  {
    id: 2,
    slug: 'project-2',
    title: 'Tax Compliance Support Project',
    description:
      'Assisted a client with structured tax documentation, compliance preparation, and reporting support.',
    summary:
      'This project focused on improving tax documentation readiness and supporting a more organised compliance preparation process.',
    overview:
      'WSK helped organise tax records, review supporting documents, and prepare a clearer compliance workflow for reporting obligations.',
    servicesInvolved: [
      'Tax documentation review',
      'Compliance preparation',
      'Reporting support',
      'Advisory coordination',
    ],
    outcome:
      'The client gained a more structured tax compliance process and better readiness for reporting and documentation requirements.',
  },
  {
    id: 3,
    slug: 'project-3',
    title: 'Payroll Management Improvement',
    description:
      'Improved payroll processing procedures to support accuracy, timeliness, and employee record management.',
    summary:
      'This project focused on strengthening payroll procedures so processing, records, and recurring payroll tasks could be managed more reliably.',
    overview:
      'WSK reviewed payroll workflows, employee record practices, and recurring processing steps to identify improvements for accuracy and timeliness.',
    servicesInvolved: [
      'Payroll workflow review',
      'Employee record management',
      'Process improvement',
      'Payroll advisory support',
    ],
    outcome:
      'The project improved payroll consistency, reduced processing gaps, and supported more reliable employee record management.',
  },
  {
    id: 4,
    slug: 'project-4',
    title: 'Corporate Registration Advisory',
    description:
      'Supported company incorporation, statutory documentation, and secretarial service requirements.',
    summary:
      'This project focused on supporting company registration requirements with clear documentation and practical secretarial guidance.',
    overview:
      'WSK guided the client through incorporation requirements, statutory documents, and key company secretarial steps needed for registration.',
    servicesInvolved: [
      'Company incorporation support',
      'Statutory documentation',
      'Secretarial services',
      'Registration advisory',
    ],
    outcome:
      'The client completed the corporate registration process with clearer documentation and stronger compliance readiness.',
  },
  {
    id: 5,
    slug: 'project-5',
    title: 'Financial Planning and Budgeting Support',
    description:
      'Prepared planning support for budgeting, cost control, and better financial decision-making.',
    summary:
      'This project focused on improving budgeting support, cost visibility, and planning inputs for better financial decision-making.',
    overview:
      'WSK supported the preparation of budget structures and financial planning inputs to help the client monitor costs and plan with greater confidence.',
    servicesInvolved: [
      'Budgeting support',
      'Cost control review',
      'Financial planning',
      'Management advisory',
    ],
    outcome:
      'The project gave the client a clearer budgeting approach and improved visibility for financial decision-making.',
  },
  {
    id: 6,
    slug: 'project-6',
    title: 'Business Process Outsourcing Setup',
    description:
      'Helped organise outsourced accounting and administrative workflows for improved operational efficiency.',
    summary:
      'This project focused on setting up clearer outsourced accounting and administrative workflows for smoother operations.',
    overview:
      'WSK helped define outsourced accounting and administrative processes, clarify responsibilities, and create a more efficient operating structure.',
    servicesInvolved: [
      'Outsourcing workflow setup',
      'Accounting process support',
      'Administrative coordination',
      'Operational improvement',
    ],
    outcome:
      'The client gained a more organised outsourcing model that improved task clarity, process flow, and operating efficiency.',
  },
  {
    id: 7,
    slug: 'project-7',
    title: 'Management Reporting Improvement',
    description:
      'Supported the preparation of structured management reports for clearer business performance review.',
    summary:
      'This project focused on improving management reporting formats so business performance could be reviewed with greater clarity.',
    overview:
      'WSK reviewed existing reporting formats and helped structure management reports that better communicate performance, costs, and key business indicators.',
    servicesInvolved: [
      'Management reporting',
      'Financial data organisation',
      'Performance review support',
      'Reporting format improvement',
    ],
    outcome:
      'The project improved reporting clarity and helped management review business performance with more useful information.',
  },
  {
    id: 8,
    slug: 'project-8',
    title: 'Corporate Business Planning Project',
    description:
      'Assisted with business planning, strategy documentation, and operational direction for a growing organisation.',
    summary:
      'This project focused on preparing planning and strategy documentation to support operational direction for a growing organisation.',
    overview:
      'WSK supported the client in preparing business planning documents, clarifying strategic priorities, and aligning operational direction with growth goals.',
    servicesInvolved: [
      'Business planning',
      'Strategy documentation',
      'Operational planning',
      'Growth advisory',
    ],
    outcome:
      'The client gained a clearer planning framework and stronger documentation to guide growth and operational decision-making.',
  },
  {
    id: 9,
    slug: 'project-9',
    title: 'Internal Control Review',
    description:
      'Reviewed internal business controls and recommended improvements to reduce operational and financial risks.',
    summary:
      'This project focused on reviewing internal controls and recommending improvements to reduce operational and financial risks.',
    overview:
      'WSK reviewed key internal controls across selected business processes and identified practical improvements to reduce risk and strengthen accountability.',
    servicesInvolved: [
      'Internal control review',
      'Risk identification',
      'Process recommendations',
      'Operational advisory',
    ],
    outcome:
      'The project helped the client strengthen controls, reduce process risk, and improve confidence in internal business procedures.',
  },
  {
    id: 10,
    slug: 'project-10',
    title: 'Business Research and Advisory Support',
    description:
      'Conducted business research and advisory support to help identify opportunities and improve decisions.',
    summary:
      'This project focused on research and advisory support to help the client identify opportunities and make more informed business decisions.',
    overview:
      'WSK conducted focused research and advisory analysis to help the client better understand business opportunities, market considerations, and decision options.',
    servicesInvolved: [
      'Business research',
      'Advisory analysis',
      'Opportunity identification',
      'Decision support',
    ],
    outcome:
      'The client received clearer research insights and practical advisory support for more informed business decisions.',
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
