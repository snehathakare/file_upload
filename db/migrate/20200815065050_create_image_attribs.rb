class CreateImageAttribs < ActiveRecord::Migration[6.0]
  def change
    create_table :image_attribs do |t|
      t.string :description

      t.timestamps
    end
  end
end
