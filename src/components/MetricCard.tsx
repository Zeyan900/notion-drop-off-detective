import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: number;
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
  variant?: 'default' | 'success' | 'warning' | 'destructive';
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  description, 
  trend,
  variant = 'default' 
}: MetricCardProps) {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4" />;
      case 'down':
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Minus className="h-4 w-4" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-success';
      case 'down':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'border-l-4 border-l-success bg-gradient-card';
      case 'warning':
        return 'border-l-4 border-l-warning bg-gradient-card';
      case 'destructive':
        return 'border-l-4 border-l-destructive bg-gradient-card';
      default:
        return 'bg-gradient-card';
    }
  };

  return (
    <Card className={`shadow-notion hover:shadow-notion-md transition-shadow duration-200 ${getVariantStyles()}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {change !== undefined && (
          <Badge 
            variant="secondary" 
            className={`${getTrendColor()} bg-transparent border-0 p-1`}
          >
            {getTrendIcon()}
            <span className="ml-1 text-xs">
              {change > 0 ? '+' : ''}{change}%
            </span>
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}