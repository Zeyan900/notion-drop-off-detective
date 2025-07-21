import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react";

interface JourneyStep {
  id: string;
  name: string;
  status: 'completed' | 'failed' | 'in-progress' | 'dropped';
  timestamp: string;
  duration?: string;
  users: number;
  details?: string;
}

interface UserJourneyTimelineProps {
  steps: JourneyStep[];
  title?: string;
}

export function UserJourneyTimeline({ 
  steps, 
  title = "User Journey Timeline" 
}: UserJourneyTimelineProps) {
  const getStatusIcon = (status: JourneyStep['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-success" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-destructive" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-warning" />;
      case 'dropped':
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
    }
  };

  const getStatusBadge = (status: JourneyStep['status']) => {
    switch (status) {
      case 'completed':
        return <Badge variant="secondary" className="bg-success/10 text-success border-success/20">Completed</Badge>;
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>;
      case 'in-progress':
        return <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">In Progress</Badge>;
      case 'dropped':
        return <Badge variant="destructive">Dropped</Badge>;
    }
  };

  const getConnectorColor = (status: JourneyStep['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-success';
      case 'failed':
      case 'dropped':
        return 'bg-destructive';
      case 'in-progress':
        return 'bg-warning';
    }
  };

  return (
    <Card className="shadow-notion bg-gradient-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex items-start gap-4 pb-6 last:pb-0">
              {/* Timeline connector */}
              {index < steps.length - 1 && (
                <div className={`absolute left-2.5 top-8 w-0.5 h-full ${getConnectorColor(step.status)}`} />
              )}
              
              {/* Status icon */}
              <div className="flex-shrink-0 mt-1">
                {getStatusIcon(step.status)}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-foreground">
                    {step.name}
                  </h4>
                  {getStatusBadge(step.status)}
                </div>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-1">
                  <span>{step.timestamp}</span>
                  {step.duration && <span>Duration: {step.duration}</span>}
                  <span>{step.users.toLocaleString()} users</span>
                </div>
                
                {step.details && (
                  <p className="text-xs text-muted-foreground">
                    {step.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}