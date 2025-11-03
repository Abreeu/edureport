// src/components/RegisteredFeedbacks/SchoolFeedbackView.jsx
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

const SchoolFeedbackView = ({ schoolFeedback }) => {
  if (!schoolFeedback || !schoolFeedback.school) {
    return (
      <EmptyState
        icon="💬"
        title="Nenhum feedback recebido"
        description="Sua escola ainda não recebeu nenhum feedback."
      />
    );
  }

  const hasFeedbacks =
    (schoolFeedback.positiveTags && schoolFeedback.positiveTags.length > 0) ||
    (schoolFeedback.negativeTags && schoolFeedback.negativeTags.length > 0);

  if (!hasFeedbacks) {
    return (
      <EmptyState
        icon="💬"
        title="Nenhum feedback recebido"
        description="Sua escola ainda não recebeu nenhum feedback."
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
  const uniqueStudentCount = schoolFeedback.uniqueStudentCount || 0;
  const totalStudentCount = schoolFeedback.totalStudentCount || 0;
  const participationRate =
    totalStudentCount > 0
      ? Math.round((uniqueStudentCount / totalStudentCount) * 100)
      : 0;

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

  return (
    <div className="space-y-6">
      {/* School Info Header */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center mb-6">
        <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-2xl border border-blue-300 shadow-sm">
          {schoolFeedback.school.schoolName?.charAt(0).toUpperCase() || "?"}
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-800">
            {schoolFeedback.school.schoolName}
          </h3>
          <p className="text-gray-600 text-sm">
            {schoolFeedback.school.school_type} •{" "}
            {schoolFeedback.school.user?.email}
          </p>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-indigo-800">
            {totalStudentCount}
          </p>
          <p className="text-sm text-indigo-600">Total Alunos</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-purple-800">
            {uniqueStudentCount}
          </p>
          <p className="text-sm text-purple-600">Participaram</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-yellow-800">
            {participationRate}%
          </p>
          <p className="text-sm text-yellow-600">Participação</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-green-800">{positiveCount}</p>
          <p className="text-sm text-green-600">Positivos</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-red-800">{negativeCount}</p>
          <p className="text-sm text-red-600">Negativos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Positive Tags */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-green-700 font-semibold text-lg mb-4 flex items-center">
            <span className="mr-2">✅</span>
            Pontos Positivos
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
            Pontos a Melhorar
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

export default SchoolFeedbackView;
