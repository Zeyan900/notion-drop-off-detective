import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FunnelStep {
  name: string;
  users: number;
  completion: number;
  dropOff?: number;
}

interface FunnelChartProps {
  steps: FunnelStep[];
  title?: string;
}

export function FunnelChart({ steps, title = "Onboarding Funnel" }: FunnelChartProps) {
  const maxUsers = Math.max(...steps.map(step => step.users));

  return (
    <Card className="shadow-notion bg-gradient-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {steps.map((step, index) => {
          const width = (step.users / maxUsers) * 100;
          const isHighDropOff = step.dropOff && step.dropOff > 20;
          
          return (
            <div key={step.name} className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">
                    {index + 1}. {step.name}
                  </span>
                  {isHighDropOff && (
                    <Badge variant="destructive" className="text-xs">
                      High Drop-off
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-muted-foreground">
                    {step.users.toLocaleString()} users
                  </span>
                  <span className="font-medium text-foreground">
                    {step.completion}%
                  </span>
                </div>
              </div>
              
              <div className="relative h-8 bg-notion-100 rounded-lg overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ease-out ${
                    isHighDropOff 
                      ? 'bg-gradient-to-r from-destructive to-destructive/80' 
                      : 'bg-gradient-primary'
                  }`}
                  style={{ width: `${width}%` }}
                />
                <div className="absolute inset-0 flex items-center px-3">
                  <span className="text-xs font-medium text-white">
                    {step.completion}%
                  </span>
                </div>
              </div>
              
              {step.dropOff !== undefined && (
                <div className="flex justify-end mt-1">
                  <span className={`text-xs ${
                    isHighDropOff ? 'text-destructive' : 'text-muted-foreground'
                  }`}>
                    -{step.dropOff}% drop-off
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}