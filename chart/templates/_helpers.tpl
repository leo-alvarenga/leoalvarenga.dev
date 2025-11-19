
{{- define "portfolio.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "portfolio.name.nightly" -}}
{{- printf "%s-%s" (include "portfolio.name" .) "nightly" | trunc 63 -}}
{{- end -}}

{{- define "portfolio.labels" -}}
app.kubernetes.io/name: {{ include "portfolio.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{- define "portfolio.labels.nightly" -}}
app.kubernetes.io/name: {{ include "portfolio.name.nightly" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

