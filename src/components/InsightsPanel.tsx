import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingDown, 
  AlertTriangle, 
  Lightbulb, 
  ExternalLink,
  Target,
  Users,
  Clock
} from "lucide-react";

interface Insight {
  type: 'critical' | 'warning' | 'opportunity';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  recommendation?: string;
  metric?: string;
}

interface InsightsPanelProps {
  insights: Insight[];
  title?: string;
}

export function InsightsPanel({ 
  insights, 
  title = "Key Insights & Recommendations" 
}: InsightsPanelProps) {
  const getInsightIcon = (type: Insight['type']) => {
    switch (type) {
      case 'critical':
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      case 'warning':
        return <TrendingDown className="h-5 w-5 text-warning" />;
      case 'opportunity':
        return <Lightbulb className="h-5 w-5 text-success" />;
    }
  };

  const getImpactBadge = (impact: Insight['impact']) => {
    switch (impact) {
      case 'high':
        return <Badge variant="destructive" className="text-xs">High Impact</Badge>;
      case 'medium':
        return <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20 text-xs">Medium Impact</Badge>;
      case 'low':
        return <Badge variant="secondary" className="text-xs">Low Impact</Badge>;
    }
  };

  const getCardBorder = (type: Insight['type']) => {
    switch (type) {
      case 'critical':
        return 'border-l-4 border-l-destructive';
      case 'warning':
        return 'border-l-4 border-l-warning';
      case 'opportunity':
        return 'border-l-4 border-l-success';
    }
  };

  return (
    <Card className="shadow-notion bg-gradient-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">
            {title}
          </CardTitle>
          <Button variant="outline" size="sm" className="text-xs">
            View All
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <Card key={index} className={`p-4 ${getCardBorder(insight.type)} bg-background/50`}>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {getInsightIcon(insight.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-foreground">
                    {insight.title}
                  </h4>
                  {getImpactBadge(insight.impact)}
                </div>
                
                <p className="text-xs text-muted-foreground mb-3">
                  {insight.description}
                </p>
                
                {insight.metric && (
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs font-medium text-foreground">
                      {insight.metric}
                    </span>
                  </div>
                )}
                
                {insight.recommendation && (
                  <div className="bg-notion-50 rounded-md p-3 mt-2">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-foreground mb-1">
                          Recommendation
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {insight.recommendation}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
        
        <div className="flex justify-center pt-2">
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
            Load More Insights
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}