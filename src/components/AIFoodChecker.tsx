import { useState, useRef } from 'react';
import { Camera, Upload, Scan, CheckCircle, AlertTriangle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/hooks/use-Toast';

interface AnalysisResult {
  isFresh: boolean;
  confidence: number;
  freshnessDays: number;
  recommendations: string[];
  warnings: string[];
}

const AIFoodChecker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image under 5MB",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setAnalysisResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeFood = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    
    // Simulate AI analysis with realistic delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock analysis result based on random factors
    const freshness = Math.random();
    const confidence = 0.75 + Math.random() * 0.2; // 75-95% confidence
    
    const mockResult: AnalysisResult = {
      isFresh: freshness > 0.4,
      confidence: Math.round(confidence * 100),
      freshnessDays: freshness > 0.4 ? Math.floor(Math.random() * 5) + 1 : 0,
      recommendations: freshness > 0.4 ? [
        "Food appears to be in good condition",
        "Safe for consumption within recommended timeframe",
        "Store in proper conditions to maintain freshness"
      ] : [
        "Consider checking for any unusual odors",
        "Examine texture and color more closely",
        "When in doubt, it's safer to dispose of the food"
      ],
      warnings: freshness > 0.4 ? [] : [
        "Possible signs of spoilage detected",
        "May not be safe for consumption",
        "Please use your best judgment"
      ]
    };

    setAnalysisResult(mockResult);
    setIsAnalyzing(false);
    
    toast({
      title: "Analysis complete",
      description: `Food appears to be ${mockResult.isFresh ? 'fresh' : 'potentially spoiled'}`,
    });
  };

  const resetAnalysis = () => {
    setSelectedImage(null);
    setAnalysisResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      {/* Floating AI Food Checker Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-6 rounded-full shadow-lg transition-all duration-300 z-40 ${
          isOpen ? 'scale-0' : 'scale-100 hover:scale-110'
        }`}
        size="lg"
        variant="secondary"
      >
        <Scan className="h-5 w-5 mr-2" />
        AI Food Checker
      </Button>

      {/* AI Food Checker Modal */}
      <div
        className={`fixed inset-0 bg-black/50 flex items-center justify-center p-4 transition-all duration-300 z-50 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <Card 
          className={`w-full max-w-md transition-all duration-300 ${
            isOpen ? 'scale-100' : 'scale-90'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Scan className="h-5 w-5 text-primary" />
                AI Food Quality Checker
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {!selectedImage ? (
              <div className="text-center space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8">
                  <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Upload a photo of your food to check its freshness
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Choose Photo
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Supported formats: JPG, PNG, WEBP (max 5MB)
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <img 
                    src={selectedImage} 
                    alt="Food to analyze" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={resetAnalysis}
                    className="absolute top-2 right-2"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {!analysisResult && !isAnalyzing && (
                  <Button onClick={analyzeFood} className="w-full" size="lg">
                    <Scan className="h-4 w-4 mr-2" />
                    Analyze Food Quality
                  </Button>
                )}

                {isAnalyzing && (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Analyzing food quality...</p>
                    <p className="text-sm text-muted-foreground mt-2">This may take a few seconds</p>
                  </div>
                )}

                {analysisResult && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className={`inline-flex items-center gap-2 p-3 rounded-lg ${
                        analysisResult.isFresh 
                          ? 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300' 
                          : 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300'
                      }`}>
                        {analysisResult.isFresh ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <AlertTriangle className="h-5 w-5" />
                        )}
                        <span className="font-semibold">
                          {analysisResult.isFresh ? 'Looks Fresh!' : 'Potential Issues Detected'}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Confidence</p>
                        <Badge variant="secondary">{analysisResult.confidence}%</Badge>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Est. Days Fresh</p>
                        <Badge variant="secondary">
                          {analysisResult.freshnessDays > 0 ? `${analysisResult.freshnessDays} days` : 'Use soon'}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Recommendations:</h4>
                      <ul className="space-y-1">
                        {analysisResult.recommendations.map((rec, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 mt-0.5 text-green-500 flex-shrink-0" />
                            {rec}
                          </li>
                        ))}
                      </ul>

                      {analysisResult.warnings.length > 0 && (
                        <>
                          <h4 className="font-semibold text-sm text-amber-600">Warnings:</h4>
                          <ul className="space-y-1">
                            {analysisResult.warnings.map((warning, index) => (
                              <li key={index} className="text-sm text-amber-600 flex items-start gap-2">
                                <AlertTriangle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                                {warning}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>

                    <Button onClick={resetAnalysis} variant="outline" className="w-full">
                      Check Another Item
                    </Button>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AIFoodChecker;