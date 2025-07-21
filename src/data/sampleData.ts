export const metrics = [
  {
    title: "Total Users Started",
    value: "12,847",
    change: 8.2,
    trend: 'up' as const,
    description: "Users who began onboarding this month"
  },
  {
    title: "Completion Rate",
    value: "64.3%",
    change: -3.1,
    trend: 'down' as const,
    description: "Users who completed full onboarding",
    variant: 'warning' as const
  },
  {
    title: "Average Time",
    value: "8.4 min",
    change: 12.5,
    trend: 'up' as const,
    description: "Average time to complete onboarding",
    variant: 'destructive' as const
  },
  {
    title: "Drop-off Rate",
    value: "35.7%",
    change: 3.1,
    trend: 'up' as const,
    description: "Users who abandoned onboarding",
    variant: 'destructive' as const
  }
];

export const funnelSteps = [
  {
    name: "Sign Up",
    users: 12847,
    completion: 100,
    dropOff: 0
  },
  {
    name: "Email Verification",
    users: 11523,
    completion: 89.7,
    dropOff: 10.3
  },
  {
    name: "Profile Setup",
    users: 9876,
    completion: 76.9,
    dropOff: 14.3
  },
  {
    name: "Team Invitation",
    users: 7234,
    completion: 56.3,
    dropOff: 26.8
  },
  {
    name: "First Action",
    users: 6012,
    completion: 46.8,
    dropOff: 16.9
  },
  {
    name: "Onboarding Complete",
    users: 5245,
    completion: 40.8,
    dropOff: 12.8
  }
];

export const journeySteps = [
  {
    id: '1',
    name: 'Account Registration',
    status: 'completed' as const,
    timestamp: '2024-01-15 09:00',
    duration: '2.3 min avg',
    users: 12847,
    details: 'High conversion rate, smooth process'
  },
  {
    id: '2',
    name: 'Email Verification',
    status: 'completed' as const,
    timestamp: '2024-01-15 09:03',
    duration: '4.1 min avg',
    users: 11523,
    details: 'Some users experience email delivery delays'
  },
  {
    id: '3',
    name: 'Profile Information',
    status: 'dropped' as const,
    timestamp: '2024-01-15 09:07',
    duration: '6.8 min avg',
    users: 9876,
    details: 'Form too long, users abandoning at company details section'
  },
  {
    id: '4',
    name: 'Team Setup',
    status: 'failed' as const,
    timestamp: '2024-01-15 09:14',
    duration: '12.2 min avg',
    users: 7234,
    details: 'Major drop-off point - complex team invitation flow'
  },
  {
    id: '5',
    name: 'Tutorial Completion',
    status: 'in-progress' as const,
    timestamp: '2024-01-15 09:26',
    duration: '8.7 min avg',
    users: 6012,
    details: 'Users getting stuck on advanced features tutorial'
  },
  {
    id: '6',
    name: 'First Milestone',
    status: 'completed' as const,
    timestamp: '2024-01-15 09:35',
    duration: '3.2 min avg',
    users: 5245,
    details: 'Good completion rate for users who reach this stage'
  }
];

export const insights = [
  {
    type: 'critical' as const,
    title: 'Team Setup Major Bottleneck',
    description: 'Team invitation flow causing 26.8% drop-off rate - highest in the funnel.',
    impact: 'high' as const,
    metric: '1,613 users lost at this step',
    recommendation: 'Simplify team invitation process or make it optional during onboarding. Consider progressive disclosure.'
  },
  {
    type: 'warning' as const,
    title: 'Profile Form Too Complex',
    description: 'Users spending 6.8 minutes on average at profile setup, indicating friction.',
    impact: 'medium' as const,
    metric: '14.3% drop-off rate',
    recommendation: 'Break profile setup into smaller steps or reduce required fields to essentials only.'
  },
  {
    type: 'opportunity' as const,
    title: 'Strong Email Verification',
    description: 'Email verification has good completion rate despite some delivery delays.',
    impact: 'low' as const,
    metric: '89.7% completion rate',
    recommendation: 'Optimize email delivery speed and add backup verification methods to push completion even higher.'
  },
  {
    type: 'critical' as const,
    title: 'Tutorial Engagement Issues',
    description: 'Users getting stuck on advanced features during tutorial phase.',
    impact: 'high' as const,
    metric: '16.9% additional drop-off',
    recommendation: 'Redesign tutorial to focus on core features first. Save advanced features for post-onboarding.'
  }
];