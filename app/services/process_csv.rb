class ProcessCsv
  ATTRS = [ "ID", "Attrib_id", "Non_Zero_Count", "Text", "Human", "Person", "Paper",
            "Business Card", "Document", "Id Cards", "Interior Design", "Indoors",
            "Transportation", "Bus", "Vehicle", "Van", "People", "Clothing", "Apparel",
            "Machine", "Wheel", "Pants", "Hand", "Crowd", "Denim", "Jeans", "Coat",
            "Overcoat", "Suit", "Jacket", "Blazer", "Tuxedo", "Holding Hands",
            "Restaurant", "Sitting", "Food Court", "Food", "Cafeteria", "Furniture",
            "Chair", "Cafe", "Accessory", "Sunglasses", "Accessories", "Computer",
            "Pc", "Electronics", "Scarf", "Plant", "Grass", "Bench", "Female", "Meal",
            "Laptop", "Couch", "Outdoors", "Face", "Leisure Activities", "Girl",
            "Park Bench", "Woman", "Audience", "Speech", "Debate", "Shoe", "Footwear",
            "Microphone", "Electrical Device", "Lecture", "Tie", "Press Conference",
            "Room", "Court", "Text Message"].freeze

  def initialize(image_attrib)
    @image_attrib = image_attrib
  end

  def file_hash
    @file_hash ||= JSON.parse(@image_attrib.file.download)
  end

  def generate
    CSV.generate(headers: false) do |csv|
      csv << ATTRS
      attrs = ATTRS - ["ID", "Attrib_id", "Non_Zero_Count"]
      file_hash.map(&:to_a).each do |arr|
        next if arr[0] == "count"
        next unless arr[1] && arr[1]["Labels"]

        row = []
        row << arr[0].split("-", 2).first
        row << arr[0].split("-", 2).last + ".jpg"
        labels = arr[1]["Labels"]
        row << labels.count

        attrs.each do |column_name|
          data = labels.find { |label| label["Name"] == column_name }
          row << (data.present? ? data["Confidence"].round(2) : 0)
        end
        csv << row
      end
    end
  end
end
