// src/components/RegisteredFeedbacks/SchoolDetailsModal.jsx
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

const SchoolDetailsModal = ({ schoolFeedback, onClose }) => {
  const school = schoolFeedback.school;
  const uniqueStudentCount = schoolFeedback.uniqueStudentCount || 0;
  const totalStudentCount = schoolFeedback.totalStudentCount || 0;
  const participationRate =
    totalStudentCount > 0
      ? Math.round((uniqueStudentCount / totalStudentCount) * 100)
      : 0;

  const getPositiveFeedbackCount = () => {
    return (
      schoolFeedback.positiveTags?.reduce(
        (sum, tag) => sum + (tag.usageCount || 0),
        0
      ) || 0
    );
  };

  const getNegativeFeedbackCount = () => {
    return (
      schoolFeedback.negativeTags?.reduce(
        (sum, tag) => sum + (tag.usageCount || 0),
        0
      ) || 0
    );
  };

  const positiveData =
    schoolFeedback.positiveTags
      ?.map((tag) => ({
        name: tag.tagName,
        count: tag.usageCount || 0,
      }))
      .sort((a, b) => b.count - a.count) || [];

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-800">
              Detalhes de {school.schoolName}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-3xl font-light">
              ×
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* School Info */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-2xl border border-blue-300 shadow-sm">
              {school.schoolName?.charAt(0).toUpperCase() || "?"}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl font-semibold text-gray-800">
                {school.schoolName}
              </h4>
              <p className="text-gray-600">{school.school_type}</p>
              <p className="text-gray-600 text-sm">{school.user?.email}</p>
            </div>
          </div>

          {/* School Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-center">
              <h4 className="text-indigo-600 text-sm font-medium mb-2">
                Total de Alunos
              </h4>
              <span className="text-2xl font-bold text-indigo-800">
                {totalStudentCount}
              </span>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <h4 className="text-purple-600 text-sm font-medium mb-2">
                Alunos Participantes
              </h4>
              <span className="text-2xl font-bold text-purple-800">
                {uniqueStudentCount}
              </span>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
              <h4 className="text-yellow-600 text-sm font-medium mb-2">
                Taxa de Participação
              </h4>
              <span className="text-2xl font-bold text-yellow-800">
                {participationRate}%
              </span>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <h4 className="text-green-600 text-sm font-medium mb-2">
                Feedbacks Positivos
              </h4>
              <span className="text-2xl font-bold text-green-800">
                {getPositiveFeedbackCount()}
              </span>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <h4 className="text-red-600 text-sm font-medium mb-2">
                Feedbacks Negativos
              </h4>
              <span className="text-2xl font-bold text-red-800">
                {getNegativeFeedbackCount()}
              </span>
            </div>
          </div>

          {/* Tags Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                <span className="mr-2">✅</span>
                Pontos Positivos
              </h4>
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

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-red-700 mb-4 flex items-center">
                <span className="mr-2">❌</span>
                Pontos a Melhorar
              </h4>
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
      </div>
    </div>
  );
};

export default SchoolDetailsModal;
