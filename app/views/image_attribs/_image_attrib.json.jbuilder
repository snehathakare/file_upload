json.extract! image_attrib, :id, :description, :created_at, :updated_at
# json.file rails_blob_path(image_attrib.file, format: :json)
json.file image_attrib.file.download
