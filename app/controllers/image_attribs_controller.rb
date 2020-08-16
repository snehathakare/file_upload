require "csv"

class ImageAttribsController < ApplicationController
  before_action :set_image_attrib, only: [:show, :update, :destroy]

  # GET /image_attribs
  # GET /image_attribs.json
  def index
    @image_attribs = ImageAttrib.all
  end

  # GET /image_attribs/1
  # GET /image_attribs/1.json
  def show
  end

  def latest
    @image_attrib = ImageAttrib.last

    if @image_attrib.present?
      render :show, status: :ok, location: @image_attrib
    else
      render json: "No image attribute record found", status: :not_found
    end
  end

  # POST /image_attribs
  # POST /image_attribs.json
  def create
    @image_attrib = ImageAttrib.new(image_attrib_params)

    if @image_attrib.save
      render :show, status: :created, location: @image_attrib
    else
      render json: @image_attrib.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /image_attribs/1
  # PATCH/PUT /image_attribs/1.json
  def update
    generator = ProcessCsv.new(@image_attrib)

    send_data(
      generator.generate,
      filename: "Converted CSV file #{Date.current}.csv"
    )
  end
  # DELETE /image_attribs/1
  # DELETE /image_attribs/1.json
  def destroy
    @image_attrib.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_image_attrib
      @image_attrib = ImageAttrib.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def image_attrib_params
      params.require(:image_attrib).permit(:description, :file)
    end
end
