// src/components/RegisteredFeedbacks/StudentFeedbackView.jsx
import EmptyState from "../commom/EmptyState";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const StudentFeedbackView = ({ schoolFeedback }) => {
  if (!schoolFeedback || !schoolFeedback.school) {
    return (
      <EmptyState
        icon="🏫"
        title="Nenhum feedback disponível"
        description="Sua escola ainda não recebeu feedbacks."
      />
    );
  }

  const hasFeedbacks =
    (schoolFeedback.positiveTags && schoolFeedback.positiveTags.length > 0) ||
    (schoolFeedback.negativeTags && schoolFeedback.negativeTags.length > 0);

  if (!hasFeedbacks) {
    return (
      <EmptyState
        icon="🏫"
        title="Nenhum feedback disponível"
        description="Sua escola ainda não recebeu feedbacks."
      />
    );
  }

  const positiveCount =
    schoolFeedback.positiveTags?.reduce(
      (sum, tag) => sum + (tag.usageCount || 0),
      0
    ) || 0;

  const positiveData =
    schoolFeedback.positiveTags
      ?.map((tag) => ({
        name: tag.tagName,
        count: tag.usageCount || 0,
      }))
      .sort((a, b) => b.count - a.count) || [];

  const negativeCount =
    schoolFeedback.negativeTags?.reduce(
      (sum, tag) => sum + (tag.usageCount || 0),
      0
    ) || 0;

  const negativeData =
    schoolFeedback.negativeTags
      ?.map((tag) => ({
        name: tag.tagName,
        count: tag.usageCount || 0,
      }))
      .sort((a, b) => b.count - a.count) || [];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-3">
          <p className="font-semibold text-gray-800">
            {payload[0].payload.name}
          </p>
          <p className="text-sm text-gray-600">{payload[0].value} feedbacks</p>
        </div>
      );
    }
    return null;
  };

  const totalCount = positiveCount + negativeCount;

  return (
    <div className="space-y-6">
      {/* School Info Header */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center mb-6">
        <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-2xl border border-blue-300 shadow-sm">
          {schoolFeedback.school.schoolName?.charAt(0).toUpperCase() || "?"}
        </div>
        <div className="flex-1">
          <h3 className="text-center md:text-left text-xl font-semibold text-gray-800">
            {schoolFeedback.school.schoolName}
          </h3>
          <p className="text-center md:text-left text-gray-600 text-sm">
            Total de feedbacks:{" "}
            <span className="font-semibold text-blue-600">{totalCount}</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Positive Tags */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-green-700 font-semibold text-lg mb-4 flex items-center">
            <span className="mr-2">✅</span>
            Pontos Positivos ({positiveCount})
          </h3>
          {positiveData.length > 0 ? (
            <ResponsiveContainer
              width="100%"
              height={Math.max(250, positiveData.length * 40)}>
              <BarChart
                data={positiveData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1fae5" />
                <XAxis type="number" stroke="#15803d" />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={120}
                  stroke="#15803d"
                  tick={{ fontSize: 13 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" radius={[0, 8, 8, 0]}>
                  {positiveData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#22c55e" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-gray-500 text-sm text-center py-8">
              Nenhum ponto positivo cadastrado
            </p>
          )}
        </div>

        {/* Negative Tags */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-red-700 font-semibold text-lg mb-4 flex items-center">
            <span className="mr-2">❌</span>
            Pontos a Melhorar ({negativeCount})
          </h3>
          {negativeData.length > 0 ? (
            <ResponsiveContainer
              width="100%"
              height={Math.max(250, negativeData.length * 40)}>
              <BarChart
                data={negativeData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#fecaca" />
                <XAxis type="number" stroke="#991b1b" />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={120}
                  stroke="#991b1b"
                  tick={{ fontSize: 13 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" radius={[0, 8, 8, 0]}>
                  {negativeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#ef4444" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-gray-500 text-sm text-center py-8">
              Nenhum ponto negativo cadastrado
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentFeedbackView;
