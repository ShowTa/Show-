json.data(@articles) { |d| json.extract!(d, :id, :title, :content) }
