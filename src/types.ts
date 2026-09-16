export interface SimulationLayer {
  id: string;
  name: string;
  active: boolean;
  color: string;
  iconName: string;
  description: string;
}

export interface EnvironmentPreset {
  id: string;
  name: string;
  tagline: string;
  scale: string;
  gridType: 'city' | 'stadium' | 'port' | 'hospital';
  baseStats: {
    scenariosTested: string;
    variables: string;
    riskReduction: string;
    estimatedSavings: string;
    agentsSimulated: string;
    criticalBottlenecksAvoided: number;
  };
  metrics: {
    label: string;
    value: string;
    change: string;
    status: 'optimal' | 'warning' | 'critical';
  }[];
}

export interface ProblemCard {
  id: string;
  domain: string;
  icon: string;
  failureAction: string;
  realWorldImpact: string;
  exampleIncident: string;
  costEstimate: string;
  metricLabel: string;
  metricValue: string;
}

export interface SolutionStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  techDetail: string;
  dataPoints: string[];
}

export interface IndustryData {
  id: string;
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  quote: string;
  features: string[];
  caseStudy: {
    client: string;
    challenge: string;
    simulationScope: string;
    outcome: string;
  };
}

export interface SimulationResult {
  runId: string;
  scenariosCount: number;
  failureRate: number;
  peakThroughput: string;
  bottleneckDetected: string;
  confidenceScore: number;
  riskReduction: number;
  projectedSavings: string;
  recommendedAdjustment: string;
  telemetryLogs: {
    timestamp: string;
    event: string;
    severity: 'info' | 'warn' | 'success';
  }[];
}
