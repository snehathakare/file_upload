json.extract! image_attrib, :id, :description, :created_at, :updated_at
json.file_url rails_blob_path(image_attrib.file, format: :json)
